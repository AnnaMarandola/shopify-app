import { Page } from "@shopify/polaris";
import { RessourcePicker } from "@shopify/app-bridge-react";
import React, { useState } from "react";

function index() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select product",
        onAction: () => setIsOpen(true),
      }}
    >
      <RessourcePicker
        ressourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={(payload) => {
          setIsOpen(false);
          console.log(payload);
        }}
      />
    </Page>
  );
}

export default index;

