import LoadingText from "@/components/LoadingText";
import {
	type BaseQueryFn,
	type FetchBaseQueryMeta,
	type QueryDefinition,
} from "@reduxjs/toolkit/dist/query";
import {type UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import React, {type ElementType} from "react";
import {type FetchArgs, type FetchBaseQueryError} from "@reduxjs/toolkit/dist/query";

interface Props {
	[key: string]: any;
	useQueryArg?: any;
}
const withQueryStatus
  = <TUseQueryArg, TUseQueryResult>(
  	useQuery: UseQuery<
  	QueryDefinition<
  	TUseQueryArg,
  	BaseQueryFn<
  	string | FetchArgs,
  	unknown,
  	FetchBaseQueryError,
  	Record<string, unknown>,
  	FetchBaseQueryMeta
  	>,
  	any,
  	TUseQueryResult
  	>
  	>,
  ) =>
  	(Component: ElementType) =>
  		function WithQueryStatusComponent({
  			useQueryArg,
  			...props
  		}: Props): JSX.Element {
  			const {data, isFetching, error} = useQuery(useQueryArg);
  			if (isFetching) {
  				return <LoadingText />;
  			}

  			if (error) {
  				return <p>Произошла непредвиденная ошибка.</p>;
  			}

  			return (
  				<>
  					<Component serverData={data} {...props} />
  				</>
  			);
  		};

export default withQueryStatus;
