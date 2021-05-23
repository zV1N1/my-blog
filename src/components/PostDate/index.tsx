import { formatDate } from '../../utils/format-date';

export type DateProps = {
  date: string;
};

export const PostDate = ({ date }: DateProps) => {
  return <>{formatDate(date)}</>;
};
