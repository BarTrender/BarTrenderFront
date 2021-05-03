# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestEstablishmentByOwnerView():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_establishmentByOwnerView(self):
    self.driver.get("https://bartrender-develop.netlify.app")
    self.driver.set_window_size(1051, 728)
    self.driver.find_element(By.ID, "login-tooltip").click()
    self.driver.find_element(By.ID, "email").send_keys("miggar@gmail.com")
    self.driver.find_element(By.NAME, "password").send_keys("vekto1234")
    self.driver.find_element(By.CSS_SELECTOR, ".modal").click()
    self.driver.find_element(By.CSS_SELECTOR, ".btn:nth-child(1)").click()
    self.driver.find_element(By.CSS_SELECTOR, ".fal").click()
    self.driver.find_element(By.CSS_SELECTOR, "li:nth-child(5) p").click()
    assert self.driver.find_element(By.CSS_SELECTOR, ".container-fluid:nth-child(1) .ml-3")== "Detalles del establecimiento"
    self.driver.find_element(By.CSS_SELECTOR, ".container-fluid:nth-child(2) .ml-3") == "Descuentos activos"
  
