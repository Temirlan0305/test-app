/// <reference types="vite/client" />

declare module "*.docx" {
    const content: any;
    export default content;
}

declare module "*.doc" {
    const content: any;
    export default content;
}

declare module "*.pptx" {
    const content: any;
    export default content;
}
