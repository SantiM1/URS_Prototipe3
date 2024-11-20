export interface DispositivosProduct {
    id: string,
    cod: string,
    imei: string,
    num: string,
    inst: string,
    edisp: string,
    f_ing: string,
    f_des: string,
    active: string

}

export interface DispositivosPagination {
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}


