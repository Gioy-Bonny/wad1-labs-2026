'use strict';

import logger from "../utils/logger.js";
import employee from "../models/employee.js";

const about = {
    createView(request, response) {
        logger.info('About the Playlist app');

        const viewData = {
            title: "Playlist about page!",
            info: employee.getAppInfo()
        };

        response.render('about', viewData);
    },
};

export default about;