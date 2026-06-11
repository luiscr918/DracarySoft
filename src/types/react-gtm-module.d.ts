declare module "react-gtm-module" {
  type InitializeArgs = { gtmId?: string; auth?: string; preview?: string };
  const TagManager: {
    initialize: (args: InitializeArgs) => void;
  };
  export default TagManager;
}
