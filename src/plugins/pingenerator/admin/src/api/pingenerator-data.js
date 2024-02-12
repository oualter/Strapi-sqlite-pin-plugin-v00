import axios from "axios";
import {useState} from "react";
import { useFetchClient } from "@strapi/helper-plugin";

const pingeneratorRequests = {
    const {get} = useFetchClient();
  getPingenconfig: async () => {
    const data = await axios.get(`/pingenerator/pass-data`);
    return data;
  },
};
export default pingeneratorRequests;
