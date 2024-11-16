export interface UsuarioProduct {
    id: string;
    name: string;
    ced: string;
    tags?: string[];
    sku?: string | null;
    tel: string;
    active: boolean;
    email: string;
    thumbnail: string;
 
}

export interface UsuarioPagination {
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

