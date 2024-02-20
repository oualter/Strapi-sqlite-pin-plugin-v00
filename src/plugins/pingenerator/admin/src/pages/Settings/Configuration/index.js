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
import pingeneratorRequests from "../../../api/pingenerator-data.js";
import { useFetchClient } from "@strapi/helper-plugin";

const { settings } = pluginPermissions;

const Configuration = () => {
  const [imageToPinOnUrl, setImageToPinOnUrl] = useState("allo");
  const ref = useRef(null);

  const [apiError, setApiError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  

  const { get, post } = useFetchClient();

  const handleSave = async () => {
    setIsLoading(true);
    try {

      const dataPost = await post(
        `/pingenerator/pass-data/post`,
        {
          data: {
            imageToPinOnUrl: ref.current.src,
          },
        }
      );

    } catch ({ message, response }) {
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
    setSelectedAssets(assets);
  };

  const handleChangeImageToPinOn = (asset) => {
    setImageToPinOnUrl(asset.url);
    ref.current.value = asset.url;
  };

  // TESTS de requêtes GET et POST
  const handleGet = async () => {
    const dataGet = await get(
      `/pingenerator/pass-data/get`
    ).then((response)=>{
      return response
    });
  };
  const handlePost = async () => {
    const dataPost = await post(
      `/pingenerator/pass-data/post`,
      {
        data: {
          imageToPinOnUrl: ref.current.src,
        },
      }
    ).then((response) => {
      return response;
    });
  };

  useEffect(() => {
    pingeneratorRequests.getPingenconfig().then((res) => {
      setImageToPinOnUrl(()=> res.data.imageToPinOnUrl);
    });
  }, [setSelectedAssets]);

console.log("||||| CONTROL imageToPinOnUrl ||||| ", imageToPinOnUrl);

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

        {/* {isLoading && (
          <Flex justifyContent="center">
            <Loader>Loading settings...</Loader>
          </Flex>
        )} */}

        {apiError && (
          <Box padding={8} background="neutral100">
            <Typography textColor="neutral800">
              Something went wrong. {apiError}
            </Typography>
          </Box>
        )}

        <ContentLayout>
          {/* <Button onClick={handleGet}>Test Get</Button>
          <Button onClick={handlePost}>Test Post</Button> */}

          <Field
            name="imgfile"
            hint="Charger l'image sur laquelle les microfictions seront épinglées. L'image de la carte doit faire une largeur minimum de 1000px"
            required={false}
          >
            <button onClick={handleToggle}>
              Changer l'image de la carte à épingler
            </button>
            <MediaLib
              isOpen={isOpen}
              onChange={(assets) => {
                const imgToPin = assets[0];
                handleAssetsChange(assets);
                handleChangeImageToPinOn(imgToPin);
              }}
              onToggle={handleToggle}
            />
            {imageToPinOnUrl && (
              <>
                <FieldInput
                  type="text"
                  ref={ref}
                  name="imageToPinOnUrl"
                  value={imageToPinOnUrl}
                />

                <div>
                  <img
                    ref={ref}
                    src={imageToPinOnUrl}
                    alt="*"
                    width="100%"
                    height="auto"
                  />
                </div>
              </>
            )}


            <FieldHint />
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
      <Configuration />
    </>
  );
};

export default memo(SettingsPage);
