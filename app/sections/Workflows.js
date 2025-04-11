import WorkflowCard from "../components/WorflowCard";
import TitleSection from "../components/TitleSectionContent";
import { ArrowDownRight, Image, Clapperboard, SquareUser } from "lucide-react";

import { useTranslations } from "next-intl";

export default function Workflows() {
  const t = useTranslations("workflows");
  const product_transfer= t.raw("workflow.product_transfer.images");
  const background_change = t.raw( "workflow.background_change.images");
  const fashion_background = t.raw( "workflow.fashion_background.images");
  const image_to_video  = t.raw( "workflow.image_to_video.images");
  const text_to_image = t.raw( "workflow.text_to_image.images");
  return (
    <>
      <div className="relative bg-black">
        <div className=" isolate overflow-visible">
          <div className="mx-auto max-w-[1300px] px-6 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-32 flex flex-col">
            <div className="mb-36">
              <TitleSection
                title={t("flag")}
                color="white"
                headline={t("title")}
                description={t("description")}
              />
            </div>
            <div className="flex flex-col gap-y-28">
              <WorkflowCard
                flag={t("workflow.product_transfer.flag")}
                alt={t("workflow.product_transfer.alt_image")}
                title={t("workflow.product_transfer.title")}
                description={t("workflow.product_transfer.description")}
                images={product_transfer}
                cta_primary={t("cta_primary")}
                cta_secondary={t("cta_secondary")}
                reverse={false}
                icon={
                  <ArrowDownRight
                    className=" text-black"
                    size={24}
                    strokeWidth={2}
                  />
                }
              />
              <WorkflowCard
                flag={t("workflow.background_change.flag")}
                alt={t("workflow.background_change.alt_image")}
                title={t("workflow.background_change.title")}
                description={t("workflow.background_change.description")}
                images={background_change}
                cta_primary={t("cta_primary")}
                cta_secondary={t("cta_secondary")}
                reverse={true}
                icon={
                  <Clapperboard
                    className=" text-black"
                    size={24}
                    strokeWidth={2}
                  />
                }
              />
               <WorkflowCard
                flag={t("workflow.fashion_background.flag")}
                alt={t("workflow.fashion_background.alt_image")}
                title={t("workflow.fashion_background.title")}
                description={t("workflow.fashion_background.description")}
                images={fashion_background}
                cta_primary={t("cta_primary")}
                cta_secondary={t("cta_secondary")}
                reverse={false}
                icon={
                  <SquareUser
                    className=" text-black"
                    size={24}
                    strokeWidth={1.5}
                  />
                }
              />
                    <WorkflowCard
                flag={t("workflow.image_to_video.flag")}
                alt={t("workflow.image_to_video.alt_image")}
                title={t("workflow.image_to_video.title")}
                description={t("workflow.image_to_video.description")}
                images={image_to_video}
                cta_primary={t("cta_primary")}
                cta_secondary={t("cta_secondary")}
                reverse={true}
                icon={
                  <Clapperboard
                    className=" text-black"
                    size={24}
                    strokeWidth={1.5}
                  />
                }
              />
                <WorkflowCard
                flag={t("workflow.text_to_image.flag")}
                alt={t("workflow.text_to_image.alt_image")}
                title={t("workflow.text_to_image.title")}
                description={t("workflow.text_to_image.description")}
                images={text_to_image}
                cta_primary={t("cta_primary")}
                cta_secondary={t("cta_secondary")}
                reverse={true}
                icon={
                  <Image
                    className=" text-black"
                    size={24}
                    strokeWidth={1.5}
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
