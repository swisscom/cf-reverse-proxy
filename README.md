# CF Kibana Proxy

This small proxy app helps you to make your Kibana dashboard from a Swisscom Application Cloud [ELK instance](https://docs.developer.swisscom.com/service-offerings/elk.html) publicly available. For it to work, the app needs to be bound to your ELK service instance.

## How to use

1. Clone this repo
1. Change the `host` in `manifest.yml` to something that isn't taken yet
1. Change the entry in `services` in `manifest.yml` from `my-elk` to the name of your ELK instance in Cloud Foundry
1. Run `cf push`
