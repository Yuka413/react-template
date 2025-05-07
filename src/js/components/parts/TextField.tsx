import * as React from "react"

type Props = {
  id: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
	type: "text" | "date";
}

export const TextField = ({label, value, onChange, type, id}: Props) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input
        id={id}
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="border block rounded-sm"
			/>
		</div>
	)
};