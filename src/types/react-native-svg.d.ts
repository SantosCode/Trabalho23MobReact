declare module "*.svg" {
  import React from "react";
  import {Props} from "src/iconography/iconography-types";

  const content: React.ComponentType<Props>;
  export default content;
}
