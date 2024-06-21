
resource "aws_instance" "ProductionEnv1" {
  ami           = "ami-0440d3b780d96b29d" # Amazon Linux 2 AMI (HVM)
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.main_a.id
  security_groups = [aws_security_group.web_sg.id]
  key_name      = var.key_name
  tags = {
    Name = "CCTB-ProductionEnv1"
  }
}

resource "aws_instance" "ProductionEnv2" {
  ami           = "ami-0440d3b780d96b29d" # Amazon Linux 2 AMI (HVM)
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.main_b.id
  security_groups = [aws_security_group.web_sg.id]
  key_name      = var.key_name
  tags = {
    Name = "CCTB-ProductionEnv2"
  }
}

resource "aws_instance" "Jenkins" {
  ami           = "ami-0440d3b780d96b29d" # Amazon Linux 2 AMI (HVM)
  instance_type = "t3.small"
  subnet_id     = aws_subnet.main_b.id
  security_groups = [aws_security_group.web_sg.id]
  key_name      = var.key_name
  user_data     = file("scripts/jenkins_install.sh/")
  tags = {
    Name = "JenkinsController"
  }
}

resource "aws_instance" "testing" {
  ami           = "ami-0440d3b780d96b29d" # Amazon Linux 2 AMI (HVM)
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.main_b.id
  security_groups = [aws_security_group.web_sg.id]
  key_name      = var.key_name
  tags = {
    Name = "TestingEnv"
  }
}

resource "aws_instance" "Staging" {
  ami           = "ami-0440d3b780d96b29d" # Amazon Linux 2 AMI (HVM)
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.main_b.id
  security_groups = [aws_security_group.web_sg.id]
  key_name      = var.key_name
  tags = {
    Name = "StagingEnv"
  }
}