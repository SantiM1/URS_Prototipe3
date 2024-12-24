/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const folders = [
    {
        id: '7c004a19-4506-48ef-93ab-f16381302e3b',
        title: 'Inbox',
        slug: 'inbox',
        icon: 'heroicons_outline:inbox',
    },
    {
        id: '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        title: 'Sent',
        slug: 'sent',
        icon: 'heroicons_outline:paper-airplane',
    },
    {
        id: 'fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5',
        title: 'Drafts',
        slug: 'drafts',
        icon: 'heroicons_outline:document',
    },
    {
        id: '0197c436-2ef3-424d-b546-8b7f49186e15',
        title: 'Spam',
        slug: 'spam',
        icon: 'heroicons_outline:exclamation-triangle',
    },
    {
        id: '2fa74637-d362-4fd2-9a88-f7195a88bdde',
        title: 'Trash',
        slug: 'trash',
        icon: 'heroicons_outline:trash',
    },
];
export const filters = [
    {
        id: 'de1b41f6-6839-4f1b-9d2c-07e55f6f8f82',
        title: 'Starred',
        slug: 'starred',
        icon: 'heroicons_outline:star',
    },
    {
        id: '71bba1ec-a90e-4a71-9932-4bab0a99aa1c',
        title: 'Important',
        slug: 'important',
        icon: 'heroicons_outline:exclamation-circle',
    },
];
export const labels = [
    {
        id: 'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
        title: 'Personal',
        slug: 'personal',
        color: 'blue',
    },
    {
        id: '745cf30e-ca84-47a1-a553-b70eb630d8e7',
        title: 'Work',
        slug: 'work',
        color: 'indigo',
    },
    {
        id: '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
        title: 'Payments',
        slug: 'payments',
        color: 'red',
    },
    {
        id: 'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
        title: 'Invoices',
        slug: 'invoices',
        color: 'teal',
    },
    {
        id: '184cd689-4ee4-47cf-9f8a-12233d614326',
        title: 'Accounts',
        slug: 'accounts',
        color: 'purple',
    },
    {
        id: 'b67fc437-6118-4ec8-a3c7-9320b828e3fc',
        title: 'Forums',
        slug: 'forums',
        color: 'green',
    },
];
export const settings = {
    messageLayout: 'right',
};
export const mails = [
    {
        id: 'd3c8a69d-1e74-42ad-91c4-b28de7ec12a3',
        type: 'mail',
        from: {
            contact: 'Sistema Notificaciones <system@urs.gob.ec>',
        },
        to: 'me <usuario.principal@urs.gob.ec>',
        cc: ['Juan Pérez <juan.perez@urs.gob.ec>'],
        bcc: ['María López <maria.lopez@urs.gob.ec>'],
        date: now
            .set({
                hour: 8,
                minute: 30,
            })
            .toISO(), // Today - 08:30
        subject: 'Notificación #1023',
        content: 'Estimado usuario, le informamos que su solicitud ha sido procesada exitosamente. Para más información, comuníquese con nuestro equipo de soporte.',
        starred: false,
        important: false,
        unread: true,
        folder: '7c004a19-4506-48ef-93ab-f16381302e3b',
    },
    {
        id: '8f3a49c1-e50a-4038-9239-b7e3bd8e4a68',
        type: 'mail',
        from: {
            contact: 'Sistema Notificaciones <system@urs.gob.ec>',
        },
        to: 'me <usuario.principal@urs.gob.ec>',
        cc: ['Carlos Andrade <carlos.andrade@urs.gob.ec>'],
        bcc: ['Laura Gómez <laura.gomez@urs.gob.ec>'],
        date: now
            .set({
                hour: 11,
                minute: 15,
            })
            .toISO(), // Today - 11:15
        subject: 'Notificación #2045',
        content: 'Su documento ha sido recibido y está en proceso de revisión. Le notificaremos en cuanto haya cambios en el estado de su trámite.',
        starred: false,
        important: false,
        unread: true,
        folder: '7c004a19-4506-48ef-93ab-f16381302e3b',
    },
    {
        id: 'e3f984d2-c55f-49b1-95db-d981b20c8ae4',
        type: 'mail',
        from: {
            contact: 'Sistema Notificaciones <system@urs.gob.ec>',
        },
        to: 'me <usuario.principal@urs.gob.ec>',
        cc: ['Luis Martínez <luis.martinez@urs.gob.ec>'],
        bcc: ['Ana Rodríguez <ana.rodriguez@urs.gob.ec>'],
        date: now
            .set({
                hour: 16,
                minute: 45,
            })
            .toISO(), // Today - 16:45
        subject: 'Notificación #3297',
        content: 'Se ha detectado un error en su formulario enviado. Por favor, revise y reenvíe la información requerida lo antes posible.',
        starred: false,
        important: false,
        unread: true,
        folder: '7c004a19-4506-48ef-93ab-f16381302e3b',
    },
    {
        id: '15a29b76-f41a-42c9-828d-a0c453e759f1',
        type: 'mail',
        from: {
            contact: 'Sistema Notificaciones <system@urs.gob.ec>',
        },
        to: 'me <usuario.principal@urs.gob.ec>',
        cc: ['Andrea Vélez <andrea.velez@urs.gob.ec>'],
        bcc: ['Jorge Vargas <jorge.vargas@urs.gob.ec>'],
        date: now
            .set({
                hour: 19,
                minute: 10,
            })
            .toISO(), // Today - 19:10
        subject: 'Notificación #4521',
        content: 'El sistema ha actualizado el estado de su cuenta. Consulte el portal de usuario para revisar los cambios efectuados.',
        starred: false,
        important: false,
        unread: true,
        folder: '7c004a19-4506-48ef-93ab-f16381302e3b',
    },
    {
        id: 'c879fa32-77a5-4b39-94a3-df98b6f65f7e',
        type: 'mail',
        from: {
            contact: 'Sistema Notificaciones <system@urs.gob.ec>',
        },
        to: 'me <usuario.principal@urs.gob.ec>',
        cc: ['Sebastián Castro <sebastian.castro@urs.gob.ec>'],
        bcc: ['Gabriela Muñoz <gabriela.munoz@urs.gob.ec>'],
        date: now
            .set({
                hour: 21,
                minute: 30,
            })
            .toISO(), // Today - 21:30
        subject: 'Notificación #5617',
        content: 'Su solicitud de cambio de contraseña ha sido completada. Si no realizó esta solicitud, contacte de inmediato con nuestro soporte técnico.',
        starred: false,
        important: false,
        unread: true,
        folder: '7c004a19-4506-48ef-93ab-f16381302e3b',
    },
];
