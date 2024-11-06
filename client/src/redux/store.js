import { configureStore } from "@reduxjs/toolkit"; 
import { userService } from "./service/user-service";

export const store = configureStore({
    reducer: {
        [userService.reducerPath]: userService.reducer,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(userService.middleware),
})