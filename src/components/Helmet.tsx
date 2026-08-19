import type { ComponentType } from "react";
import { Helmet as ReactHelmet } from "react-helmet";
import type { HelmetProps } from "react-helmet";

/**
 * @types/react-helmet still declares Helmet against the pre-React-18
 * `React.Component` shape, which no longer carries `refs`. React 18's
 * JSX.ElementClass requires it, so the class fails TypeScript's "is this a
 * valid JSX component" check even though it renders fine at runtime. The cast
 * is confined to this file rather than repeated at every call site.
 *
 * react-helmet is legacy here in any case: Gatsby 5 ships a built-in Head API
 * and gatsby-plugin-react-helmet is deprecated. Moving SEO onto Head would
 * delete this file along with the dependency.
 */
const Helmet = ReactHelmet as unknown as ComponentType<HelmetProps>;

export default Helmet;
export type { HelmetProps };
