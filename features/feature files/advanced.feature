Feature: PurgoMalum Advanced Tests
    PurgoMalum is a simple, free, RESTful web service for filtering and removing content of profanity, obscenity and other unwanted text.

    Background:
        Given PurgoMalum RESTful web service is up and running

    @advanced
    Scenario Outline: Validating Advanced examples
        When validating RESTful web service for "<type>" response by replacing "<add>" with "<replace_by>" using "<replace_type>" in text "<text>" and expect "<response>"
        Then Validate the response "<response>"

        Examples:
            | type | text                    | add       | replace_type | replace_by                              | response                                              |
            | xml  | this is some test input | this,some | fill_text    | [replaced]                              | [replaced] is [replaced] test input                   |
            | json | this is some test input | input     | fill_char    | _                                       | this is some test _____                               |
            | json | this is some test input | some      | fill_char    | -                                       | this is ---- test input                               |
            #error case
            | json | this is some test input |           | fill_text    | this is curiously long replacement text | User Replacement Text Exceeds Limit of 20 Characters. |
            | xml  | this is some test input |           | fill_text    | this is curiously long replacement text | User Replacement Text Exceeds Limit of 20 Characters. |