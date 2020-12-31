/* /lib/apollo.js */

import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";


const config = {
        link: new HttpLink({
                uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`, // Server URL (must be absolute)
        })
};
export default withData(config);