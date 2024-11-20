export interface AplicacionesProduct {
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
export interface InstitucionesProduct {
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
export interface ServiciosWebProduct {
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
export interface TipoDocumentoProduct {
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
export interface SistemaPagination {
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}


