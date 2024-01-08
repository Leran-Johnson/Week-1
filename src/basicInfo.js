import React from 'react';
import styles from './basicInfo.module.css';

class BasicInfo extends React.Component {
    render() {
        const { name, number, dateOfBirth } = this.props.person;

        return (
            <div className={styles.infoContainer}>
                <h1>Name: {name}</h1>
                <p>Number: {number}</p>
                <p>Date of Birth: {dateOfBirth}</p>
                {/* Add more information as needed */}
            </div>
        );
    }
}

export default BasicInfo