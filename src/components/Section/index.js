import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import InputWrapper from '../../components/InputWrapper'

const Section = ({ fieldData, name, wrapClassName, ...wrapProps }) => {
    const { content, cssClass, type } = fieldData

    return (
        <InputWrapper
            {...wrapProps}
            inputData={fieldData}
            labelFor={name}
            wrapClassName={classnames(
                wrapClassName,
                'gsection',
                'gfield_gsection',
                'gfield_gsection_formatted',
                'gfield_no_follows_desc',
                'gravityform__' + type + '__wrap',
                cssClass
            )}
        >
            <h2 className="gsection_title">{ReactHtmlParser(content)}</h2>
        </InputWrapper>
    )
}

export default Section

Section.propTypes = {
    fieldData: PropTypes.shape({
        cssClass: PropTypes.string,
        content: PropTypes.string,
        type: PropTypes.string,
    }),
    name: PropTypes.string,
    wrapClassName: PropTypes.string,
    wrapProps: PropTypes.object,
}
