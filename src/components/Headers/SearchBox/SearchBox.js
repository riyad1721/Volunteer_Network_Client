import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className='Search-container'>
            <h1 className='title'> I GROW BY HELPING PEOPLE IN NEED</h1>
            <InputGroup className="mb-4 input-box" style={{ width: '30%', margin: '0 auto' }}>
                <FormControl
                    placeholder="Search...."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="primary" style={{ fontSize: '25px' }} id="button-addon2">
                    Search
                </Button>
            </InputGroup>

        </div>
    );
};

export default SearchBox;