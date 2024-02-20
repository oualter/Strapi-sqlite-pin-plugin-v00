import React, { useState, useEffect, useRef, memo } from "react";
import { AnErrorOccurred, CheckPagePermissions } from "@strapi/helper-plugin";
import {
  Button,
  Box,
  Breadcrumbs,
  BaseHeaderLayout,
  Crumb,
  ContentLayout,
  DatePicker,
  Field,
  FieldLabel,
  FieldHint,
  FieldError,
  FieldInput,
  FieldAction,
  Flex,
  HeaderLayout,
  Layout,
  Loader,
  Typography,
} from "@strapi/design-system";
import { Check } from "@strapi/icons";
import MediaLib from "../../../components/MediaLib/index.jsx";

import pluginPermissions from "../../../permissions";
import pluginId from "../../../pluginId";
// import axios from "../../../utils/axiosInstance";
// import axios from "axios";
import pingeneratorRequests from "../../../api/pingenerator-data.js";
import { useFetchClient } from "@strapi/helper-plugin";

const { settings } = pluginPermissions;
// console.log(
//   "pluginPermissions settings => ",
//   pluginPermissions.settings[0].action
// );

// export default function Configuration() {
const Configuration = ({ attribute, name, onChange, value }) => {
  const ref = useRef(null);

  const [apiError, setApiError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [imageToPinOnUrl, setImageToPinOnUrl] = useState(value ? value : "");

  const { get, post } = useFetchClient();

  // useEffect(() => {
  //   async () => {
  //     try {
  //       console.log("il est là le GET !!!!");
  //       console.log("pluginId => ", pluginId);
  //       // const results = await axios(`./${pluginId}/settings`, {
  //       const results = await axios(`./${pluginId}/pass-data`, {
  //         method: "GET",
  //       });
  //       console.log("APRES il est là le GET !!!!");
  //       console.log("results => ", results);

  //       // setImageToPinOnUrl(results.data.imageToPinOnUrl || "");
  //     } catch ({ message }) {
  //       console.log("message derreur => ", message);
  //       setApiError(message);
  //     }
  //   };
  //   setIsLoading(false);
  // }, [setIsLoading, setImageToPinOnUrl, setApiError]);

  const handleSave = async () => {
    console.log('handlesave !!!!!!!!!!!!!!!!')
    setIsLoading(true);


 
          // console.log("name !!!! => ", name);
          // console.log("type !!!! => ", type);
          // console.log("selectedAssets !!!! => ", selectedAssets);

    try {
      console.log("le POST est là !!!!!!");

          // onChange({
          //   target: {
          //     name: "pingenerator.pingenerator-setting",
          //     type: "string",
          //     value: ref.current.src,
          //   },
          // });
      
      // await axios(`./${pluginId}/settings`, {
      const dataPost = await post(
        `/pingenerator/pass-data/post`,
        {
          data: {
            imageToPinOnUrl: ref.current.src,
          },
        },
        {
          headers: {
            Allow: "GET, POST, HEAD",
            Accept: "application/json",
            "Content-Type": "application/json",
            "custom-header": "STRAPI IS PAIN",
          },
        }
      );
      // return dataPost;
      // await axios(`./${pluginId}/pingenerator-controller`, {
      //   method: "POST",
      //   headers: {
      //     // "X-Requested-With": "XMLHttpRequest",
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   data: {
      //     imageToPinOnUrl,
      //   },
      // });

      // const dataPost = await strapi.db
      //   .query("plugin::pingenerator.pingenerator-setting")
      //   .findOne({ select: ["imageToPinOnUrl"] });

    } catch ({ message, response }) {
      console.log("response => ", response);
      console.log("message derreur => ", message);
      setApiError(message);
    }

    setIsLoading(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAssetsChange = (assets) => {
    console.log("assets => ", assets);
    setSelectedAssets(assets);
    console.log("selectedAssets => ", selectedAssets);
  };

  const handleChangeImageToPinOn = (asset) => {
    console.log("handleChangeImageToPinOn asset => ", asset);
    console.log("handleChangeImageToPinOn ref  => ", ref);
    ref.current.value = asset.url;
  };

  const handleGet = async () => {
    console.log("handleGet");
    // const dataGet = await axios.get(`./pingenerator/pingenerator-controller`);
    const dataGet = await get(
      // `/admin/plugins/pingenerator`
      // `/admin/plugins/pingenerator/pass-data`
      `/pingenerator/pass-data/get`
      // `./`
    ).then((response)=>{
      console.log("handleGet response => ", response);
      return response
    });
    // return dataGet;
  };
  const handlePost = async () => {
    console.log("handlePost");
    const dataPost = await post(
      // `admin/plugins/pingenerator/pingenerator-controller.js`,
      // `/admin/plugins/pingenerator`,
      `/pingenerator/pass-data/post`,
      {
        data: {
          imageToPinOnUrl: ref.current.src,
        },
      }
      // {
      //   headers: {
      //     Allow: "GET, POST, HEAD",
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //     "custom-header": "STRAPI IS PAIN",
      //   },
      // }
    ).then((response) => {
      console.log("handlePost response => ", response);
      return response;
    });
    // return dataPost;
    // const postConfig = await strapi.entityService.findOne(
    //   "plugin::pingenerator.pingenerator-setting",
    //   1,
    //   {
    //     fields: ["imageToPinOnUrl"],
    //   }
    // );
    // const postConfig = await strapi.db
    //   .query("plugin::pingenerator.pingenerator-setting")
    //   .findOne({ select: ["imageToPinOnUrl"] })
    //   .then(() =>
    //     console.log("postConfig strapi.entityService=> ", postConfig)
    //   );

    // const postConfig = await strapi.entityService.update(
    //   "plugin::pingenerator.pingenerator_settings",
    //   1,
    //   {
    //     data: {
    //       // imageToPinOnUrl: ref.current.src,
    //       imageToPinOnUrl: "Hey ca marche ?",
    //     },
    //   }
    // );
    // imageToPinOnUrl: ref.current.src,
  };

  useEffect(() => {
    pingeneratorRequests.getPingenconfig().then((res) => {
      console.log("pingeneratorRequests/////////////// res.data => ", res.data);
      setImageToPinOnUrl(res.data);
    });
  }, [setSelectedAssets]);

  return (
    <>
      <Box>
        <BaseHeaderLayout
          title="Pin Generator"
          subtitle="Configuration de la carte à épingler"
          as="h2"
          primaryAction={
            <Button
              startIcon={<Check />}
              // loading={config === undefined}
              // disabled={!unsavedChanges}
              onClick={handleSave}
            >
              Save
            </Button>
          }
        />
      </Box>
      <Box
        paddingTop={4}
        paddingBottom={4}
        marginTop={1}
        marginLeft={10}
        marginRight={8}
        background="neutral0"
        shadow="filterShadow"
      >
        {/* <CheckPagePermissions
          // permissions={pluginPermissions["settings.config"]}
          permissions={pluginPermissions.settings[0].action}
        >
          HEY PERMISSION
        </CheckPagePermissions> */}

        {isLoading && (
          <Flex justifyContent="center">
            <Loader>Loading settings...</Loader>
          </Flex>
        )}

        {apiError && (
          <Box padding={8} background="neutral100">
            <Typography textColor="neutral800">
              Something went wrong. {apiError}
            </Typography>
          </Box>
        )}

        <ContentLayout>
          <Button onClick={handleGet}>Test Get</Button>
          <Button onClick={handlePost}>Test Post</Button>

          <Field
            name="imgfile"
            hint="Charger l'image sur laquelle les microfictions seront épinglées. L'image de la carte doit faire une largeur minimum de 1000px"
            required={false}
          >
            <button onClick={handleToggle}>Changer la carte</button>
            <MediaLib
              isOpen={isOpen}
              // name="imageToPinOnUrl"
              // onChange={(e) => handleChangeImageToPinOn(e.target.value)}
              onChange={(assets) => {
                console.log("e.target.value => ", assets);
                const imgToPin = assets[0];
                // handleChangeImageToPinOn(e.target.value);
                handleAssetsChange(assets);
                handleChangeImageToPinOn(imgToPin);
              }}
              onToggle={handleToggle}
              // value={imageToPinOnUrl}
            />
            <FieldInput
              type="text"
              ref={ref}
              name="imageToPinOnUrl"
              placeholder="url de l'image à épingler"
              // value={imageToPinOnUrl || ""}
              // onChange={handleChangeImageToPinOn}
            />
            <FieldHint />
            {/* Display selected assets */}
            {selectedAssets &&
              selectedAssets.map((asset) => (
                <div key={asset.url}>
                  <img
                    ref={ref}
                    src={asset.url}
                    alt={asset.alt}
                    width="100%"
                    height="auto"
                  />
                </div>
              ))}
          </Field>
        </ContentLayout>
        {/* </CheckPagePermissions> */}
      </Box>

      {/* <Box
        paddingTop={4}
        paddingBottom={4}
        marginTop={8}
        marginLeft={10}
        marginRight={8}
        background="neutral0"
        shadow="filterShadow"
      >
        <ContentLayout paddingTop={8} background="neutral300">
          <Field name="imgfile" hint="Charger l'image de l'épingle">
            <button onClick={handleToggle}>Changer l'épingle</button>
            <MediaLib
              isOpen={isOpen}
              onChange={handleAssetsChange}
              onToggle={handleToggle}
            />
            <FieldHint />
            {selectedAssets.map((asset) => (
              <div key={asset.url}>
                <img
                  src={asset.url}
                  alt={asset.alt}
                  width="100%"
                  height="auto"
                />
              </div>
            ))}
          </Field>
        </ContentLayout>
      </Box> */}
    </>
  );
};

const SettingsPage = () => {
  return (
    <>
      <Box background="neutral100">
        <HeaderLayout title={"Configuration"} as="h2" />
      </Box>
      <Configuration />
    </>
  );
};

export default memo(SettingsPage);
