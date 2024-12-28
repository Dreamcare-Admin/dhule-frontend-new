import OwnerInfoForm from "@/components/Forms/OwnerInfoForm";
import PropertyInfoForm from "@/components/Forms/PropertyInfoForm";
import TenantInfoForm from "@/components/Forms/TenantInfoForm";
import TenantKnownPersonForm from "@/components/Forms/PersonKnownTenantForm";
import WorkplaceInfoForm from "@/components/Forms/WorkplaceInfoForm";

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <OwnerInfoForm />;
    case 1:
      return <PropertyInfoForm />;
    case 2:
      return <TenantInfoForm />;
    case 3:
      return <TenantKnownPersonForm />;
    case 4:
      return <WorkplaceInfoForm />;
    default:
      return null;
  }
};

module.exports = { renderStep };
