import { useGetDemosQuery } from "@redux/demo/demoApi";
import ComponentOne from "@ui/ComponentOne";

/* This component renders when navigating to route "/route-one". 
Return components that yo want to show for this route here.  */

const RouteOne = () => {
    const { data, isLoading } = useGetDemosQuery();
    console.log(data, isLoading);
    return (
        <div>
            <ComponentOne />
        </div>
    );
};

export default RouteOne;
