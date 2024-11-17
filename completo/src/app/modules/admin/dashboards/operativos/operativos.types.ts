export interface OperativoProduct {
    id: string;
    inst: string;
    op: string;
    f_ini: string;
    f_fin: string;
    f_ing: string;
    f_des: string;
    active: boolean;
 
}

export interface OperativoPagination {
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

export interface FaseProduct {
    id: string;
    inst: string;
    op: string;
    f_ini: string;
    f_fin: string;
    f_ing: string;
    f_des: string;
    active: boolean;
 
}

export interface FasePagination {
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}


