export interface PlanificacionProduct {
    id: string,
    inst: string,
    op: string,
    fase: string,
    dpa: string,
    p_viv: string,
    p_hog: string,
    f_ini: string,
    f_fin: string,
    f_ing: string,
    f_des: string,
    active: string

}

export interface PlanificacionPagination {
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}


