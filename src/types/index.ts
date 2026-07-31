export type NavigationItem = {
    label: string;
    href: string;
};
export type Category = {
    title: string;
    description: string;
    href: string;
    image: string;
    imageAlt: string;
};
export type Product = {
    title: string;
    category: string;
    price: string;
    href: string;
    image: string;
    imageAlt : string;   
}
export type Testimonial = {
    quote: string;
    customer: string;
    occasion: string;
}