import { Back, Span } from "./style/styled.loading";

type Props = {
	show: boolean;
};

export default function Loading(props: Props) {
	return props.show ? (
		<>
			<Back>
				<Span />
			</Back>
		</>
	) : (
		""
	);
}
