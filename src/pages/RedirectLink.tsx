import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRedirectLink } from "../hooks/useRedirectLink";
import { useCountView } from "../hooks/useCountView";

const RedirectLink = () => {
  const { short_name } = useParams<{ short_name: string }>();
  const {
    mutate: redirectLink,
    data: redirectData,
    isPending,
    isError,
  } = useRedirectLink();
  const { mutate: countView } = useCountView();

  useEffect(() => {
    if (short_name) {
      redirectLink({ short_name });
    }
  }, [short_name, redirectLink]);

  useEffect(() => {
    if (redirectData?.data?.data?.short_name) {
      countView(redirectData.data.data.short_name);
    }
  }, [redirectData, countView]);

  useEffect(() => {
    if (redirectData && redirectData.data.success) {
      const { original_link } = redirectData.data.data;
      window.location.href = original_link;
    }
  }, [redirectData]);

  const renderContent = () => {
    switch (true) {
      case isPending:
        return "Loading...";
      case isError:
        return "Shortlink not found.";
      case redirectData && !redirectData.data.success:
        return "Short link has been banned.";
      default:
        return "Redirecting...";
    }
  };

  return <div className="redirect-link">{renderContent()}</div>;
};

export default RedirectLink;
