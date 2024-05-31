import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRedirectLink } from "../hooks/useRedirectLink";

const RedirectLink = () => {
  const { short_name } = useParams<{ short_name: string }>();
  const { mutate, data, isPending, isError } = useRedirectLink();

  useEffect(() => {
    if (short_name) {
      mutate({ short_name });
    }
  }, [short_name, mutate]);

  useEffect(() => {
    if (data && data.data.data.status) {
      const { original_link } = data.data.data;
      window.location.href = original_link;
    }
  }, [data]);

  if (isPending) {
    return <div className="redirect-link">Redirecting...</div>;
  }

  if (isError) {
    return <div className="redirect-link">Shortlink not found</div>;
  }

  if (data && !data.data.data.status) {
    return <div className="redirect-link">Short link has been banned</div>;
  }

  return <div className="redirect-link">Loading...</div>;
};

export default RedirectLink;
