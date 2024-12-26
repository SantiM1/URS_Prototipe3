export interface Activity {
    id: string;
    title: string
    icon: string;
    benefits: string[];
    date: string;
    extraContent?: string;
    linkedContent?: string;
    link?: string;
    useRouter?: boolean;
}
