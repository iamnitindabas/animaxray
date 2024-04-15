import { Pagination } from "@nextui-org/react";

interface ListsPaginationProps {
  paginationData: pageobject | null;
  onPageChange: (pageValue: number) => void;
}
interface pageobject {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

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
