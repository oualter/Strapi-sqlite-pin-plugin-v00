import React, { memo, useEffect, useState } from "react";
import {
  Field,
  FieldLabel,
  FieldHint,
  FieldError,
  FieldInput,
  FieldAction,
} from "@strapi/design-system";
import { Button, Box, Typography } from "@strapi/design-system";
import { HeaderLayout } from "@strapi/design-system";
import { Loader } from "@strapi/design-system";

const settingContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [imgToPin, setImgToPin] = useState(null);
}