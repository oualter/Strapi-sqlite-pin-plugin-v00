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
  Typography
} from "@strapi/design-system";
import { Check } from "@strapi/icons";
import MediaLib from "../../../components/MediaLib/index.jsx";

import pluginPermissions from '../../../permissions';
import pluginId from "../../../pluginId";
// import axios from "../../../utils/axiosInstance";
import axios from "axios";

const { settings } = pluginPermissions;
console.log(
  "pluginPermissions settings => ",
  pluginPermissions.settings[0].action
);

// export default function Configuration() {

const SettingsContainer = () => {

  const ref = useRef(null);

  const [apiError, setApiError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [imageToPinOnUrl, setImageToPinOnUrl] = useState(null);

  useEffect(async() => {
    try {
      console.log('il est là le GET !!!!')
      const results = await axios(`./${pluginId}/settings`, { method: "GET" });
      console.log("APRES il est là le GET !!!!");
      console.log("results => ", results);

      // setImageToPinOnUrl(results.data.imageToPinOnUrl || "");
    } catch ({ message }) {
      console.log("message derreur => ", message)
      setApiError(message);
    }

    setIsLoading(false);
  }, [setIsLoading, setImageToPinOnUrl, setApiError]);

  const handleSave = async () => {
    setIsLoading(true);

    try {
      console.log("le POST est là !!!!!!");
      await axios(`./${pluginId}/settings`, {
        method: "POST",
        headers: {
          // "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          imageToPinOnUrl,
        },
      }).then(function (response) {
        console.log("allooooooooooo quoi !");
        console.log(response.headers);
      });
    } catch ({ message, response }) {
      console.log('response => ', response);
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
    ref.current.value = asset.url
    
  }

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
}

const SettingsPage = () => {
  return (
    <>
      <Box background="neutral100">
        <HeaderLayout title={"Configuration"} as="h2" />
      </Box>
      <SettingsContainer />
    </>
  );
};

export default memo(SettingsPage);
