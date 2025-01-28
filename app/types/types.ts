export interface User{
    name: string;
    description: string;
    daily_salary: number;
}
export interface Saving{
    first_saving: number;
    total_saving: number;
    total_money_used: number;
}
export interface Bill{
    ordinal_number: number,
    total_money_spent: number,
    description: string,
    is_increase: boolean,
    date_now: Date,
}
export interface MyImage{
    username: string;
}
export interface Data{
    user: User;
    saving: Saving;
    bill: Bill[];
    image: MyImage;
}