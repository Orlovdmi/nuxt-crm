export interface IMenuItem {
    name: string
    url: string
    icon: string
}

export const MENU_DATA: IMenuItem[] = [
    {
        icon: 'radix-icons:dashboard',
        name: 'Home',
        url: '/',
    },
    {
        icon: 'fluent:receipt-28-regular',
        name: 'Deals',
        url: '/deals',
    },
    {
        icon: 'mingcute:group-line',
        name: 'Customers',
        url: '/customers',
    },

]