export type TImage = {
    src : string;
    alt : string;
    title : string;
}

export interface IArticle {
    id : string;
    title : string;
    description : string;
    content : string;
    image : TImage;
    date : string;
    author : string;
    tags : string[];
}