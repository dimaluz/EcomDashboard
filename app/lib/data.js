import {RecentOrders} from "./models";
import { ConnectToDB } from "./utils";

export const fetchRecentOrders = async (q, page) => {

    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;

    try{
        ConnectToDB();
        const count = await RecentOrders.find({custom_name:{$regex:regex}}).count();
        const recent_orders = await RecentOrders.find({custom_name:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        // console.log("Orders: ",orders);
        return { count, recent_orders };
    }catch(error){
        console.log(error);
        throw new Error('Failed to fetch orders');
    }
}