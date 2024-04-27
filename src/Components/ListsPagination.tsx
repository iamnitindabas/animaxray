import { Pagination } from "@nextui-org/react";
import { ListsPaginationProps } from "../Types/Types";

const ListsPagination: React.FC<ListsPaginationProps> = ({
  paginationData,
  onPageChange,
}) => {
  return (
    <>
      <div className="flex justify-center items-center py-5">
        {paginationData
          ? paginationData && ( // Adding a conditional check for paginationData
              <Pagination
                size="md"
                color="warning"
                showControls
                total={paginationData.last_visible_page}
                initialPage={paginationData.current_page}
                onChange={(e) => {
                  onPageChange(e);
                }}
              />
            )
          : ""}
      </div>
    </>
  );
};

export default ListsPagination;
