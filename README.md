# CF Kibana Proxy

This small proxy app helps you to make your Kibana dashboard from an [ELK instance](https://docs.developer.swisscom.com/service-offerings/elk.html) publicly available. For it to work, the app needs to be bound to your ELK service instance.

## How to use

1. Change the hostname to something that isn't taken yet
1. Modify the `manifest.yml` by changing the name of the bound service from `my-elk` to the name of your ELK instance
1. Run `cf push`
