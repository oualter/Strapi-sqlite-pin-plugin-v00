import { React, useState } from "react";
import {
  Typography,
  DatePicker,
  Box,
  Breadcrumbs,
  Crumb,
  Button,
  BaseHeaderLayout,
  ContentLayout,
  Field,
  FieldLabel,
  FieldHint,
  FieldError,
  FieldInput,
  FieldAction,
  Flex,
  HeaderLayout,
  Layout,
} from "@strapi/design-system";
import MediaLib from "../../../components/MediaLib/index.jsx";

export default function Configuration() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState([]);

  const handleToggle = () => {
      setIsOpen(!isOpen);
  };


  const handleAssetsChange = (assets) => {
    console.log("assets => ", assets)
    setSelectedAssets(assets);
  };

console.log("isOpen => ", isOpen );

  return (
    <>
      <Box>
        <BaseHeaderLayout
          title="Pin Generator"
          subtitle="Configuration de la carte à épingler"
          as="h2"
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
        <ContentLayout>
          <Field
            name="imgfile"
            hint="Charger l'image sur laquelle les microfictions seront épinglées. L'image de la carte doit faire une largeur minimum de 1000px"
          >
            <button onClick={handleToggle}>Changer la carte</button>
            <MediaLib
              isOpen={isOpen}
              onChange={handleAssetsChange}
              onToggle={handleToggle}
            />
            <FieldHint />
            {/* Display selected assets */}
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
