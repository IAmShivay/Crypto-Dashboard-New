import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux/index";

const DaysAgo = () => {
    const dispatch = useDispatch();

    const { updateAgoDays } = bindActionCreators(actionCreators, dispatch);

    return (

        <div className="flex justify-center space-x-3 xs:space-x-4 xs2:space-x-6 lg:space-x-4">

            <button
                className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 dark:focus:border-white dark:focus:bg-slate-700 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500 dark:hover:border-white dark:hover:bg-slate-700"
                onClick={() => updateAgoDays("1")}
            >
                1D
            </button>

            <button
                className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 dark:focus:border-white dark:focus:bg-slate-700 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500 dark:hover:border-white dark:hover:bg-slate-700"
                onClick={() => updateAgoDays("7")}
            >
                1W
            </button>

            <button
                className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 dark:focus:border-white dark:focus:bg-slate-700 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500 dark:hover:border-white dark:hover:bg-slate-700"
                onClick={() => updateAgoDays("30")}
            >
                1M
            </button>

            <button
                className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 dark:focus:border-white dark:focus:bg-slate-700 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500 dark:hover:border-white dark:hover:bg-slate-700"
                onClick={() => updateAgoDays("180")}
            >
                6M
            </button>

            <button
                className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 dark:focus:border-white dark:focus:bg-slate-700 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500 dark:hover:border-white dark:hover:bg-slate-700"
                onClick={() => updateAgoDays("360")}
            >
                1Y
            </button>
        </div>
    );
};

export default DaysAgo;
