import React, { useState } from 'react';
import '../styles/selectForm.css';

interface SelectFormProps {
    options: string[];
    onOptionsChange: (newOptions: string[]) => void;
    selectedOption: string;
    onSelectedOptionChange: (option: string) => void;
}

const SelectForm: React.FC<SelectFormProps> = ({
    options,
    onOptionsChange,
    selectedOption,
    onSelectedOptionChange,
}) => {
    const [newOption, setNewOption] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleAddOption = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newOption.trim()) {
            setError('Option cannot be empty');
        } else if (options.includes(newOption.trim())) {
            setError('Option already exists');
        } else {
            const updatedOptions = [...options, newOption.trim()];
            onOptionsChange(updatedOptions);
            setNewOption('');
            setError('');
        }
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectedOptionChange(e.target.value);
    };

    return (
        <div className='container-form-category'>
            <form className='form-category' onSubmit={handleAddOption}>
                <input
                    type="text"
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    placeholder="Add a category"
                />
                <button type="submit">Add</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="" disabled>Select a category</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {/* {selectedOption && <p>You selected: {selectedOption}</p>} */}
        </div>
    );
};

export default SelectForm;
