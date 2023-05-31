import * as Styles from './styles';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface Props {
	page: number;
	setPage: (value: number) => void;
	totalPages: number;
}

function Pagination({ page, setPage, totalPages }: Props) {
	function handlePage(value: number) {
		setPage(value);
	}

	return (
		<Styles.Content>
			{page > 1 && (
				<Styles.Button type="button" onClick={() => handlePage(page - 1)}>
					<BsChevronLeft size={20} styles={{ color: '#fff' }} />
				</Styles.Button>
			)}

			{page !== 1 && page === totalPages && totalPages > 2 && (
				<Styles.Button type="button" onClick={() => handlePage(page - 2)}>
					{page - 2}
				</Styles.Button>
			)}

			{page > 1 && (
				<Styles.Button type="button" onClick={() => handlePage(page - 1)}>
					{page - 1}
				</Styles.Button>
			)}

			<Styles.Button type="button" onClick={() => handlePage(page)} focus>
				{page}
			</Styles.Button>

			{page < totalPages && (
				<Styles.Button type="button" onClick={() => handlePage(page + 1)}>
					{page + 1}
				</Styles.Button>
			)}

			{page === 1 && page !== totalPages && totalPages > 2 && (
				<Styles.Button type="button" onClick={() => handlePage(page + 2)}>
					{page + 2}
				</Styles.Button>
			)}

			{page < totalPages && (
				<Styles.Button type="button" onClick={() => handlePage(page + 1)}>
					<BsChevronRight size={20} styles={{ color: '#fff' }} />
				</Styles.Button>
			)}
		</Styles.Content>
	);
}

export { Pagination };
