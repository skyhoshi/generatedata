import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import ManageAccount from '~components/accounts/manageAccount/ManageAccount.component';
import RadioPill, { RadioPillRow } from '~components/radioPills/RadioPill';
import * as styles from '../../../plugins/dataTypes/Date/Date.scss';
import { format, fromUnixTime, add } from 'date-fns';

export type CreateAccountProps = {
	i18n: any;
	onSave: () => void;
}

enum ExpiryOption {
	none = 'none',
	date = 'date'
}

type CreateAccountState = {
	firstName: string;
	lastName: string;
	email: string;
	country: string;
	region: string;
	disabled: boolean;
	expiry: ExpiryOption;
	expiryDate: null | number;
}

const initialState: CreateAccountState = {
	firstName: '',
	lastName: '',
	email: '',
	country: '',
	region: '',
	disabled: false,
	expiry: ExpiryOption.none,
	expiryDate: null
};

const yearFromNow = Number(format(add(new Date(), { years: 1 }), 't'));

const CreateAccount = ({ i18n, onSave }: any): JSX.Element => {
	const [data, setData] = useState(initialState);
	const [showDatepicker, setShowDatepicker] = useState(false);
	const [showErrors] = useState(false);

	let accountHasChanges = data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.country !== '';
	if (data.country === 'CA' && data.region === '') {
		accountHasChanges = false;
	}

	const onCancel = (): void => setData(initialState);

	const updateAccountData = (newData: any): void => {
		setData({
			...data,
			...newData
		});
	};

	const toggleAccountDisabled = (disabled: boolean): void => {
		setData({
			...data,
			disabled
		});
	};

	const toggleExpiry = (expiry: ExpiryOption): void => {
		setData({
			...data,
			expiry
		});

		if (expiry === ExpiryOption.date) {
			setShowDatepicker(true);
		}
	};

	const onSelectDate = (expiryDate: any): void => {
		setData({
			...data,
			expiryDate
		});
	};

	const accountData = {
		firstName: data.firstName,
		lastName: data.lastName,
		email: data.email,
		country: data.country,
		region: data.region
	};

	let expiryLabel = i18n.selectExpiryDate;
	if (data.expiryDate !== null) {
		console.log(data.expiryDate);
		expiryLabel = format(fromUnixTime(data.expiryDate), 'MMM d, y');
	}

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ flex: 1 }}>
				<ManageAccount
					i18n={i18n}
					data={accountData}
					updateAccount={updateAccountData}
					accountHasChanges={accountHasChanges}
					submitButtonLabel={i18n.createAccount}
					showRequiredFieldError={showErrors}
					onCancel={onCancel}
					onSave={(): void => onSave(data)}
				/>
			</div>
			<div style={{ flex: 1, marginLeft: 20, borderLeft: '1px solid #f2f2f2', paddingLeft: 20 }}>
				<div>
					<div style={{ marginBottom: 15, display: 'flex', marginTop: 2 }}>
						<input
							type="checkbox"
							checked={data.disabled}
							id="accountDisabled"
							onChange={(e): void => toggleAccountDisabled(e.target.checked)}
						/>
						<label htmlFor="accountDisabled">{i18n.accountDisabled}</label>
					</div>
				</div>
				<div>
					<div style={{ marginBottom: 15, marginTop: 2 }}>
						<RadioPillRow>
							<RadioPill
								label={i18n.noExpiry}
								onClick={(): void => toggleExpiry(ExpiryOption.none)}
								name="expiry"
								checked={data.expiry === 'none'}
								style={{ marginRight: 6 }}
							/>
							<RadioPill
								label={expiryLabel}
								onClick={(): void => toggleExpiry(ExpiryOption.date)}
								name="expiry"
								checked={data.expiry === 'date'}
							/>
						</RadioPillRow>
					</div>
				</div>
			</div>

			<div style={{ display: 'none' }}>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<DatePicker
						autoOk
						open={showDatepicker}
						className={styles.dateField}
						value={data.expiryDate === null ? fromUnixTime(yearFromNow) : fromUnixTime(data.expiryDate!)}
						onChange={(val: any): void => onSelectDate(format(val, 't'))}
						onClose={(): void => setShowDatepicker(false)}
					/>
				</MuiPickersUtilsProvider>
			</div>
		</div>
	);
};

export default CreateAccount;