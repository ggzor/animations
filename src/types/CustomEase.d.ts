declare namespace gsap {
    export class CustomEase extends Ease {
        static create(id: string, data: string): CustomEase;
        static get(id: string): CustomEase;
    }
}
