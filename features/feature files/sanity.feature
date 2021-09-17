Feature: PurgoMalum Sanity Tests
    PurgoMalum is a simple, free, RESTful web service for filtering and removing content of profanity, obscenity and other unwanted text.

    Background:
        Given PurgoMalum RESTful web service is up and running

    @sanity
    Scenario Outline: Validating Response Types
        When validating RESTful web service for "<type>" response by replacing "<add>" with "<replace_by>" using "<replace_type>" in text "<text>" and expect "<response>"
        Then Validate the response "<response>"

        Examples:
            | type  | text                    | add | replace_type | replace_by | response                |
            | xml   | this is some test input |     |              |            | this is some test input |
            | json  | this is some test input |     |              |            | this is some test input |
            | plain | this is some test input |     |              |            | this is some test input |