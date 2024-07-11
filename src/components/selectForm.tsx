import React, { useState } from 'react';
import '../styles/selectForm.css';

//Typage des Props
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
    //Déclaration des const pour la gestion de la catégorie
    const [newOption, setNewOption] = useState<string>('');
    const [error, setError] = useState<string>('');

    //Gestion du choix de la catégorie
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

    //Gestion du changement de la catégorie
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
        </div>
    );
};

export default SelectForm;
