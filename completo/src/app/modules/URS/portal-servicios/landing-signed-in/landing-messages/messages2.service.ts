import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'app/modules/URS/portal-servicios/landing-signed-in/landing-messages/messages.types';
import { map, Observable, ReplaySubject, switchMap, take, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Messages2Service {
    private _messages: ReplaySubject<Message[]> = new ReplaySubject<Message[]>(
        1
    );

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for messages
     */
    get messages$(): Observable<Message[]> {
        return this._messages.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all messages
     */
    getAll(): Observable<Message[]> {
        console.log('Enter2')
        return this._httpClient.get<Message[]>('api/common/messages2').pipe(
            tap((messages) => {
                console.log(messages)
                this._messages.next(messages);
            })
        );
    }

    /**
     * Create a message
     *
     * @param message
     */
    create(message: Message): Observable<Message> {
        return this.messages$.pipe(
            take(1),
            switchMap((messages) =>
                this._httpClient
                    .post<Message>('api/common/messages2', { message })
                    .pipe(
                        map((newMessage) => {
                            // Update the messages with the new message
                            this._messages.next([...messages, newMessage]);

                            // Return the new message from observable
                            return newMessage;
                        })
                    )
            )
        );
    }

    /**
     * Update the message
     *
     * @param id
     * @param message
     */
    update(id: string, message: Message): Observable<Message> {
        return this.messages$.pipe(
            take(1),
            switchMap((messages) =>
                this._httpClient
                    .patch<Message>('api/common/messages2', {
                        id,
                        message,
                    })
                    .pipe(
                        map((updatedMessage: Message) => {
                            // Find the index of the updated message
                            const index = messages.findIndex(
                                (item) => item.id === id
                            );

                            // Update the message
                            messages[index] = updatedMessage;

                            // Update the messages
                            this._messages.next(messages);

                            // Return the updated message
                            return updatedMessage;
                        })
                    )
            )
        );
    }

    /**
     * Delete the message
     *
     * @param id
     */
    delete(id: string): Observable<boolean> {
        return this.messages$.pipe(
            take(1),
            switchMap((messages) =>
                this._httpClient
                    .delete<boolean>('api/common/messages2', { params: { id } })
                    .pipe(
                        map((isDeleted: boolean) => {
                            // Find the index of the deleted message
                            const index = messages.findIndex(
                                (item) => item.id === id
                            );

                            // Delete the message
                            messages.splice(index, 1);

                            // Update the messages
                            this._messages.next(messages);

                            // Return the deleted status
                            return isDeleted;
                        })
                    )
            )
        );
    }

    /**
     * Mark all messages as read
     */
    markAllAsRead(): Observable<boolean> {
        return this.messages$.pipe(
            take(1),
            switchMap((messages) =>
                this._httpClient
                    .get<boolean>('api/common/messages2/mark-all-as-read')
                    .pipe(
                        map((isUpdated: boolean) => {
                            // Go through all messages and set them as read
                            messages.forEach((message, index) => {
                                messages[index].read = true;
                            });

                            // Update the messages
                            this._messages.next(messages);

                            // Return the updated status
                            return isUpdated;
                        })
                    )
            )
        );
    }
}
