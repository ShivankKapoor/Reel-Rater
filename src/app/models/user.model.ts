// Generated by https://quicktype.io

export interface ReviewerListModel {
    page:       number;
    perPage:    number;
    totalPages: number;
    totalItems: number;
    items:      ReviewerModel[];
}

export interface ReviewerModel {
    id:             string;
    collectionId:   string;
    collectionName: string;
    created:        string;
    updated:        string;
    username:       string;
    password:       string;
}
