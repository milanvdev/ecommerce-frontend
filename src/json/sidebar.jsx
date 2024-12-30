import {Icons} from "../icons/Icons.jsx";

export const SidebarData = {
    "sidebar": [
        {
            "section": "Menu",
            "items": [
                {"name": "Dashboard", "icon": Icons.chart, "route": "/"},
                {"name": "Products", "icon": Icons.product, "route": "/products"},
                {"name": "Category", "icon": Icons.colorSwatch, "route": "/category"},
                {"name": "Customer", "icon": Icons.userIcon, "route": "/customer"},
                {"name": "Orders", "icon": Icons.shoppingCart, "route": "/orders"},
                {"name": "Coupons", "icon": Icons.shoppingBag, "route": "/coupons"},
                {"name": "Chats", "icon": Icons.chart, "route": "/chats"}
            ]
        },
        {
            "section": "Others",
            "items": [
                {"name": "Settings", "icon": Icons.settingIcon, "route": "/settings"},
                {"name": "LogOut", "icon": Icons.logoutIcon, "route": "/logout"}
            ]
        }
    ]
};
